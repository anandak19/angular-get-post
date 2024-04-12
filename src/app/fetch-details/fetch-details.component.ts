import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../services/httpservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface tasksDetails{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-fetch-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fetch-details.component.html',
  styleUrl: './fetch-details.component.scss'
})
export class FetchDetailsComponent{

  taskDetails: tasksDetails[] = []
  allDetails: tasksDetails[] = []
  userInputId! : number;

  constructor(private httpService: HttpserviceService){}

  showTasks(){
    this.httpService.getTaskDetails().subscribe((res: any)=>{
      this.taskDetails = res;
    })
  }

  search(){
    this.httpService.getTaskDetails().subscribe((res: any)=>{
      this.allDetails = res;
      this.taskDetails = this.allDetails.filter(task => task.userId ===  Number(this.userInputId));
    })
  }

}
