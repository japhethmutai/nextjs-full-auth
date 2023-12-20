'use client';

import { usePasswordReset } from '@/hooks';
import { Form } from '@/components/forms';

const PasswordResetForm = () => {
    const { email, isLoading, onChange, onSubmit } = usePasswordReset();

	const config = [
		{
			labelText: 'Email address',
			labelId: 'email',
			type: 'email',
			onChange,
			value: email,
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

export default PasswordResetForm