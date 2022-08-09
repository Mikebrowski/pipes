import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { pipe } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mainpipe',
  templateUrl: './mainpipe.component.html',
  styleUrls: ['./mainpipe.component.css']
})




export class MainpipeComponent implements OnInit {

    randomText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    isFavorite?: boolean;
    titleOfMovie="";


    coursedata= {
    title:"The complete Bla bla Courses BLA",
    rating: 4.9645,
    students: 30123,
    price: 190.95,
    reaseDate: new Date(2022,8,1),
    clockString:"200222",
  }



  constructor() { }


  ngOnInit(): void {
  }

  createData(value:string){
    console.log(value);
    return "Michal"; 
  }
  favoriteTheItem(){
    console.log(this.isFavorite)
    this.isFavorite =!this.isFavorite;
  }



 }//MainpipeComponent

 export class DataForCourses {

  coursedata= {
    title:"The complete Bla bla Courses BLA",
    rating: 4.9645,
    students: 30123,
    price: 190.95,
    reaseDate: new Date(2022,8,1)
  }

  constructor() {}




}

  



