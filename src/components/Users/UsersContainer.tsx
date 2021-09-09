import React from 'react';
import { connect } from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import {StateType} from '../../redux/redux-store';

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)