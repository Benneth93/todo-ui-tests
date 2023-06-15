import {PrismaClient} from '@prisma/client'


class TodoDatabaseService {
    

    public async getTodoIDByDetails(title: string, description: string){
        
        const prisma = new PrismaClient();
        const tasks = await prisma.Tasks.findMany()
        console.log(tasks)
    }
}

export default new TodoDatabaseService();