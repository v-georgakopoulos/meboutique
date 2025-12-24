
import Signupform from '../../components/SignupForm/Signupform'
import SigninForm from "../../components/SigninForm/SigninForm"

import { AuthContainer } from './AuthPage.styles'

const Authentication = () => {
    return (
        <AuthContainer>
            <SigninForm />
            <Signupform />
        </AuthContainer>
    )
}

export default Authentication
