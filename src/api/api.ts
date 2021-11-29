import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7e5b4528-2880-4677-b629-b878b7697787'
    },
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
};

export const followAPI = {
    followUsers(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data);
    },
    unfollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data);
    },
    updateUserPhoto(photo: File) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    }
};