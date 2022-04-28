import { resolve } from "path";
import {
  DeleteUserResponse,
  GetUserResponse,
  ListUserResponse,
  PostUserResponse,
  UpdateUserResponse,
  UserApi,
} from "../../../dist/api/user/types";
import { Api } from "../../../dist/models";
import { db, admin } from "../../firebase/admin";

export class UserApiImpl implements UserApi {
  listUser(): Promise<ListUserResponse> {
    return new Promise<ListUserResponse>((resolve, reject) => {
      return db
        .collection("OAS-USERS")
        .get()
        .then((users: any) => {
          console.log(users.docs[0].data());
          let userdata: Array<Api.User> = [];
          users.docs.forEach((doc: any) => {
            let user = <Api.User>doc.data();
            userdata.push(user);
          });
          const response = <ListUserResponse>{ status: 200, body: userdata };
          resolve(response);
        });
    });
  }
  postUser(request: Api.User): Promise<PostUserResponse> {
    return new Promise<PostUserResponse>((resolve, reject) => {
      const ref = db.collection("OAS-USERS").doc();
      return ref
        .set({
          ...request,
          id: ref.id,
        })
        .then(() => {
          const response = <PostUserResponse>{
            status: 201,
            body: `User Created successfully with id ${ref.id}`,
          };
          resolve(response);
        })
        .catch((err: string) => {
          const response = <PostUserResponse>{
            status: 409,
            body: `failed to create user`,
          };
          resolve(response);
        });
    });
  }
  getUser(userId: string): Promise<GetUserResponse> {
    return new Promise<GetUserResponse>((resolve, reject) => {
      return db
        .collection("OAS-USERS")
        .doc(userId)
        .get()
        .then((user: any) => {
          console.log(user.data());
          const response = <GetUserResponse>{ status: 200, body: user.data() };
          resolve(response);
        })
        .catch((err: string) => {
          const response = <GetUserResponse>{
            status: 400,
            body: { message: `failed to get user` },
          };
          resolve(response);
        });
    });
  }
  deleteUser(userId: string): Promise<DeleteUserResponse> {
    return new Promise<DeleteUserResponse>((resolve, reject) => {
      return db
        .collection("OAS-USERS")
        .doc(userId)
        .get()
        .then((user) => {
          console.log(user.data());
          return user.ref.delete;
        })
        .then(() => {
          const response = <DeleteUserResponse>{
            status: 200,
            body: { message: `user deleted successfully` },
          };
          resolve(response);
        })
        .catch((err: string) => {
          const response = <DeleteUserResponse>{
            status: 400,
            body: { message: `failed to delete user` },
          };
          resolve(response);
        });
    });
  }
  updateUser(userId: string, request: Api.User): Promise<UpdateUserResponse> {
    return new Promise<UpdateUserResponse>((resolve, reject) => {
      return db
        .collection("OAS-USERS")
        .doc(userId)
        .get()
        .then((user) => {
          console.log(user.data());
          return user.ref.update({
            ...request,
            id: user.data()?.id,
          });
        })
        .then(() => {
          const response = <UpdateUserResponse>{
            status: 200,
            body: { message: `updated user successfully` },
          };
          resolve(response);
        })
        .catch((err: string) => {
          const response = <UpdateUserResponse>{
            status: 404,
            body: { message: `failed to update user` },
          };
          resolve(response);
        });
    });
  }
}
