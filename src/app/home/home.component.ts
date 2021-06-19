import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

interface Select {
  value: string;
  viewValue: string;
}
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text = new FormControl('', [Validators.required]);

  maxChars = 1200;
  role = '';
  chars = 0;

  // email = new FormControl('', [Validators.required, Validators.email]);


  industry: Select[] = [
    {
      value: 'marketing',
      viewValue: 'Marketing'
    },
    {
      value: 'ai',
      viewValue: 'AI'
    },
    {
      value: 'analytics',
      viewValue: 'Analytics'
    },
    {
      value: 'animation',
      viewValue: 'Animation'
    },
    {
      value: 'computervision',
      viewValue: 'Computer Vision'
    },
    {
      value: 'deisgn',
      viewValue: 'Design'
    },
    {
      value: 'itservices',
      viewValue: 'IT Services'
    }
  ]
  sector: Select[]=[
    {
      value:'machinelearning',
      viewValue:'Machine Learning'
    },
    {
      value:'sales',
      viewValue:'Sales'
    },
    {
      value:'datascience',
      viewValue:'Data Science'
    },
    {
      value:'bigdata',
      viewValue:'Big Data'
    },
    {
      value:'other',
      viewValue:'Others'
    }
  ];

  task: Task = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Incubation', completed: false, color: 'primary'},
      {name: 'Acceleration', completed: false, color: 'primary'},
      {name: 'Investment', completed: false, color: 'primary'},
      {name: 'Mentoring', completed: false, color: 'primary'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  url = '';
  selectedValue: string | undefined;
  myText: any | undefined;
  onSelectfile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
