import { IParams } from '@/types';
import { redirect } from 'next/navigation';

export default function RootPage(childres: IParams) {
  redirect(childres.params.locale);
}