import Link from "next/link"

export default function Dashboard({message}){
    return (
        <>
            <h1>Welcome to Dashboard</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <h2>{message}</h2>
        </>
    )
}

// export const getServerSideProps = async context => {
//     let user='Abhishek';
    
//     if(!user){
//         return {
// 			props: {},

// 			redirect: { destination: "/login" },
// 		}

//     }
//     return {
//         props: {message: `Welcome ${user}`}
//     }
// }