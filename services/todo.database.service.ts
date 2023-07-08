import {PrismaClient} from '@prisma/client'

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 150;

class TodoDatabaseService {
    

    public async getTodoIDByDetails(titleIn: string, descriptionIn: string){
        
        const prisma = new PrismaClient();
        let retryCount = 0;

        while (retryCount < MAX_RETRIES){
            try{
            const task = await prisma.Tasks.findMany({
                select:{
                    TaskID: true,
                },
                where:{
                    Title: titleIn,
                    Description: descriptionIn
                }
            });
    
            if(task.length > 0){
                return task[0].TaskID;
            } 

        //if no tasks are found return null
        //should refactor this to return an error message instead
            return 'No Task Found';
            }catch(error){
                retryCount++;
            }

            if(retryCount === MAX_RETRIES){
                throw new Error("Failed to get taskID. max Retries reached")
            }

            await delay(RETRY_DELAY_MS);
        }
    }
}

function delay(ms: number){
    return new Promise((resolve)=> setTimeout(resolve, ms));
}

export default new TodoDatabaseService();