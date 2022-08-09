import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'custompipe'})
export class SummaryPipe implements PipeTransform{

    transform(value: any, limit?: number) {
        if(!value){
            return null
        }
        let AcutalLimit = (limit) ? limit: 50;
        return value.substr(0,20)+" "+ "WHATEVER";       
    }
    

  
      /* transform(clockString: string): string {
        return clockString.split(':').slice(0, 5).join(':') + '...';
      } */
  
    }