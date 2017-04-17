import { Component } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'test',
  template: `
  <h1>
  <ul>
    <li *ngFor="let post of posts">
      {{post.id}}. {{post.title}}
    </li>
  </ul>
    <input type="text" [(ngModel)]="title"/>
    <hr />
    <h3>Add user</h3>
    <form (submit)="addUser(user.value)">
      <input type="text" #user/>
    </form>
    <button (click)="toggleUsers()">Show users</button>
    <div *ngIf="showUsers">
      <ul>
        <li *ngFor="let user of users">
          {{user}} <button (click)="deleteUser(user)">X</button>
        </li>
      </ul>
    </div>
  </h1>
  `,
  providers: [PostService]
})
export class TestComponent {
  title: string;
  test: string;
  users: string[];
  showUsers: boolean;
  posts: Post[]

  constructor(private postService: PostService) {
    this.title = 'app works!';
    this.test = 'test';
    this.users = ['michal', 'artyom', 'strielok'];
    this.showUsers = false;
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }

  addUser(user) {
    this.showUsers = true;
    this.users = [].concat(user, this.users);
  }

  deleteUser(userToDelete) {
    this.users = this.users.filter((user) => {
      return userToDelete !== user;
    })
  }
}


interface address {
  street: string;
  city: address;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
