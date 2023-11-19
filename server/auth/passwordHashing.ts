// import { argon2, encodeBase64, decodeBase64, Version, ThreadMode } from '../deps.ts'
import { encodeBase64, decodeBase64, bcrypt } from '../deps.ts'

export const bcryptHashing = async (password: string) => {
    try{
        const salt = await bcrypt.genSalt(13)
        const hashed_pass = await bcrypt.hash(password, salt)
        const result = encodeBase64(hashed_pass)
        return result.toString()
    }catch(e){
        throw new Error(e)
    }
}

export const hashingVerification = async (hashed_password: string, input_password: string) => {
    const decoded = decodeBase64(hashed_password)
    try{
        const textDecoder = new TextDecoder()
        const plain_hash = textDecoder.decode(decoded)
        const check = await bcrypt.compare(input_password, plain_hash)
        
        if(!check){
            return false
        }
        return true
    }catch(e){
        throw new Error(e)
    }
}