import {PrismaClient} from '@prisma/client'


class TodoDatabaseService {
    

    public async getTodoIDByDetails(titleIn: string, descriptionIn: string){
        
        var retryCount = 3;
        const prisma = new PrismaClient();
        
        while(retryCount !=0)
        {
            const task = await prisma.Tasks.findMany({
                select:{
                    TaskID: true,
                },
                where:{
                    Title: titleIn,
                    Description: descriptionIn
                }
            })
    
            if(task.length > 0){
                return task[0].TaskID;
            }
            retryCount -= 1;
        }
        
        //if no tasks are found return null
        //should refactor this to return an error message instead
        return null;
        
    }
}

export default new TodoDatabaseService();