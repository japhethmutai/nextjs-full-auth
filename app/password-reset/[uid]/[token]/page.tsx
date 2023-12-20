import { PasswordResetConfirmForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Maxicom | Password Reset Confirm',
	description: 'Maxicom password reset confirm page',
};

interface Props {
	params: {
		uid: string;
		token: string;
	};
}

const Page = ({ params: { uid, token } }: Props) => {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<img
					className='mx-auto h-10 w-auto'
					src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
					alt='Maxicom'
				/>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Reset your password
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<PasswordResetConfirmForm uid={uid} token={token} />
			</div>
		</div>
	)
}

export default Page