import { Injectable } from "@angular/core";
import { Auth, User, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, user } from '@angular/fire/auth';
import { Firestore, collection, addDoc, and } from '@angular/fire/firestore';
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root',
})
export class AuthService{
  user$: Observable<User | null>;

  constructor(
    private auth: Auth,
    private firestore : Firestore,

  ){this.user$ = authState(this.auth);}

  async register(email: string, password: string): Promise<any> {
    try {
      const credential = await createUserWithEmailAndPassword(this.auth, email, password); // Use direct call
      return credential;
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const res = await signInWithEmailAndPassword(this.auth, email, password);
      if (!res.user) {
        const date = new Date();
        const timestamp = date.getTime(); // Use getTime() for timestamp

        // Updated Firestore usage (assuming proper setup)
        const loginLogCollection = collection(this.firestore, 'loginLog');
        await addDoc(loginLogCollection, {
          email,
          date: timestamp,
        });
      }
        return res;
    } catch (error) {
      console.log("Error");
      throw error;
    }
  }


  public isLoggedIn(): Promise<boolean>
  {
    return new Promise((resolve: any) =>{
      this.auth.onAuthStateChanged((user) =>{
        resolve(!!user);
      });
    });
  }

  getLoggedUser(): User | null {
    return this.auth.currentUser;
  }

  logout(): Promise<void> {
    return this.auth.signOut();
  }

}
