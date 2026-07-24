
export async function randomTime(){
    const timeMax = 65000
    const randomTime = Math.floor(Math.random() * timeMax);
    return randomTime; 
}