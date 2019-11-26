import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLogged = true;

  collections = [
    {
        id: 1,
      name: 'My Collection',
    },
    {
        id: 2,
      name: 'Test Collection',
    },
    {
        id: 3,
      name: 'Collection Test',
    },
    {
      id: 3,
      name: 'Collection Test',
    }];

    isVisible = false;
    isOkLoading = false;
  
    showModal(): void {
      this.isVisible = true;
    }
  
    handleOk(): void {
      this.isOkLoading = true;
      setTimeout(() => {
        this.isVisible = false;
        this.isOkLoading = false;
      }, 500);
    }
  
    handleCancel(): void {
      this.isVisible = false;
    }


  }
