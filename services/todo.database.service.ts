import {PrismaClient} from '@prisma/client'


class TodoDatabaseService {
    

    public async getTodoIDByDetails(titleIn: string, descriptionIn: string){
        
        const prisma = new PrismaClient();
        
        const task = await prisma.Tasks.findMany({
            select:{
                TaskID: true,
            },
            where:{
                Title: `webdriver.io: ${titleIn}`,
                Description: `webdriver.io: ${descriptionIn}`
            }
        })
        
        if(task.length > 0){
            return task[0].TaskID;
        }
        else if (task.length > 1)return null;
        else if (task.length == 0) return null;
        
    }
}

export default new TodoDatabaseService();