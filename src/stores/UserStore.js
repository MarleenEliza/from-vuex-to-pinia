import { defineStore } from 'pinia'

export const useUserStore =  defineStore('UserStore', {
    state: () => ({
        user: 'Marleen Elisabeth Dijkman',
    }),
    getters: {
        getLastName: state => state.user.split(' ').pop(),
    },
    actions: {
        updateUser(user) {
            this.user = user
        },
        updateLastName(lastName) {
            this.user = this.user.splice(0, this.user.length - 1, lastName);
        }
    }
})