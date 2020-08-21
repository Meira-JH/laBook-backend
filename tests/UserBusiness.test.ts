import { UserBusiness } from "../src/business/UserBusiness"
import { CustomError } from "../src/util/CustomError"

describe ( "signup test", () => {
    test( "should return missing input error when name is empty", async () =>{
        expect.assertions(2)
        const mockIdGenerator = {} as any
        const mockHashManager = {} as any
        const userBusinessMock = new UserBusiness(
            mockHashManager,
            mockIdGenerator
        )
        try{
            await userBusinessMock.signup("1234", "", '1234567', "joao@gmail.com", "phone", 'normal')
        }
        catch(error){
            expect(error.message).toEqual("Nome inválido")
            expect(error).toBeInstanceOf(CustomError)
        }
    })
})