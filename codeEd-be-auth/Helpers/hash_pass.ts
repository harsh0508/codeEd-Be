import bcrypt from 'bcrypt' 

const saltRounds = 10;
export async function hashPassword(pass : string){
    var salt = await bcrypt.genSalt(saltRounds)
    console.log(salt)
    const hashPassword = await bcrypt.hash(pass,salt)

    return hashPassword
}

export async function verifyPass(hashedPass:string) {
    const res  = await bcrypt.compare('This is pass by','$2b$10$c2G3wqXQzpDNvNaUm/z/7utQ8iRr/seXVEmCTzzJOj0DWwKlRfozO')
    return res
}