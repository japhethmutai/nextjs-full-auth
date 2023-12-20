'use client';

import { usePasswordResetConfirm } from '@/hooks';
import { Form } from '@/components/forms';

interface Props {
	uid: string;
	token: string;
}

const PasswordResetConfirmForm = ({ uid, token }: Props) => {
    const { new_password, re_new_password, isLoading, onChange, onSubmit } =
	usePasswordResetConfirm(uid, token);

	const config = [
		{
			labelText: 'New password',
			labelId: 'new_password',
			type: 'password',
			onChange,
			value: new_password,
			required: true,
		},
		{
			labelText: 'Confirm new password',
			labelId: 're_new_password',
			type: 'password',
			onChange,
			value: re_new_password,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Request password reset'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

export default PasswordResetConfirmForm