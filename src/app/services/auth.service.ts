import { inject, Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Auth } from "@angular/fire/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  firebaseAuth = inject(Auth)

  register(email:string,username:string,password:string): Observable<void>{
    const prmise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(reponse => updateProfile(reponse.user, {displayName: username}))
    

    return from(prmise);
  }
}