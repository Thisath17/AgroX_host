import firebase from "../../fireBase";

const db = firebase.ref("/user");

class userSevice{
    getAll() {
        return db;
    }

    create(order) {
        return db.push(order);
    }

    update(key, value) {
        return db.child(key).update(value);
    }

    delete(key) {
        return db.child(key).remove();
    }

    deleteAll() {
        return db.remove();
    }
}

export default new userSevice();
