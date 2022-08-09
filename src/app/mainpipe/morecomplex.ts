import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'titleCase'})
export class ComplexPipe implements PipeTransform{

    transform(value: string) {
        if (!value) {
            return;
        }
        let arrValue = value.toLowerCase().split(' ');
        let newArrValue = arrValue.map((element, index) => {
            if ((element !== 'of' && element !== 'the' && element !== 'on') || index === 0) {
                return element.substring(0, 1).toUpperCase() + element.substring(1);
            } else {
                return element;
            }
        })
        return newArrValue.join(' ');
    }
}

/* DECREPIT*/
/* transform(value: string) {

    if(!value){
      return "NOTHING"
    }
    let words = value.split('');
    //FOR LOOP TO GO THOUGH THE ENTIRE LIST
    for(var index=0; index<words.length; index++)
    {
     if(index > 0 && this.isPrepositions(words[index]))
     words[index] = words[index].toLocaleLowerCase();
     else{
      //words[index] = words[index].substr(0,1).toUpperCase()+ words[index].substr(1).toLowerCase
      //VS
      words[index]= this.toTitleCase(words[index]);

     }

    }
    return words.join(' ')

  
      
    }
    private toTitleCase(word:string):string {
      return word.substr(0,1).toUpperCase()+ word.substr(1).toLowerCase
    } 




    isPrepositions(word:string) : boolean
    {
      let englishPrepositions= [
        'of',
        'the'
      ];
      return englishPrepositions.includes(word.toLowerCase());
    }
} */