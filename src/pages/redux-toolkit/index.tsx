import type { NextPage } from 'next'
import Head from 'next/head'
import { selectAuthState, setAuthState } from "../../app/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from '../../app/store';

interface IProps {
    authStateProp: boolean;
}

const ReduxToolkitPage: NextPage = ({ authStateProp }: IProps) => {
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();

    return (
        <>
            <Head>
                <title>Redux Toolkit</title>
                <meta name="description" content="Redux Toolkit Demo" />
            </Head>
            <div>
                <div>{authState ? "Logged in" : "Not Logged In"}</div>
                <button
                    onClick={() =>
                        authState
                            ? dispatch(setAuthState(false))
                            : dispatch(setAuthState(true))
                    }
                >
                    {authState ? "Logout" : "LogIn"}
                </button>
            </div>
        </>
    )
}

export default ReduxToolkitPage

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ params }) => {
            // we can set the initial state from here
            // we are setting to false but you can run your custom logic here
            store.dispatch(setAuthState(true));
            console.log("State on server", store.getState());
            return {
                props: {
                    authStateProp: true,
                },
            };
        }
);