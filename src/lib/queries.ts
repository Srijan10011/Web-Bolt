import { useQuery } from '@tanstack/react-query';
import { supabase } from './supabaseClient';

export const useTotalCustomersQuery = (enabled: boolean) => {
  return useQuery({
    queryKey: ['totalCustomers'],
    enabled,
    queryFn: async () => {
      const [{ count: guestCount, error: guestErr }, { data, error: ordErr }] = await Promise.all([
        supabase.from('guest_order').select('id', { count: 'exact', head: true }),
        supabase.from('orders').select('user_id').not('user_id', 'is', null),
      ]);

      if (guestErr) throw guestErr;
      if (ordErr) throw ordErr;

      const uniqueUsers = new Set((data ?? []).map(r => r.user_id)).size;
      return (guestCount ?? 0) + uniqueUsers;
    },
  });
};
