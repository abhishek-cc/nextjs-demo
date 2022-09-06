import { parseCookies } from 'nookies';
import nookies from 'nookies';
import { redirect } from 'next/dist/server/api-utils';

export default function AuthRoute({ user }) {
	return (
		<>
			<h1>Welcome {user}. This is a protected page</h1>
		</>
	)
}


export const getServerSideProps = async context =>
{
    const cookies = parseCookies();
    const token = nookies.get('token');
    if(!token){
        return {
			props: {},

			redirect: { user: cookies.token, destination: "/login" },
		}

    }
 
    return {
        props: {},
        redirect: { destination:'/user-dashboard' }
    }
}