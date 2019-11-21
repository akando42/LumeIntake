import React, {useState} from 'react';
import { useLogin, useNotify} from 'react-admin';	
import { ThemeProvider } from '@material-ui/styles';

const LoginPage = ({theme}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const login = useLogin();
	const notify = useNotify();
	const submit = (e) => {
		console.log("Submmit form info");
	}

	return (
		<ThemeProvider theme={theme}>
            <form onSubmit={submit}>
                <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} /> 
                <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </form>
        </ThemeProvider>
	)
}

export default LoginPage;