import React from 'react';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootState} from '../../../store/redux-store';
import {ProfileActionCreators} from '../../../store/reducers/profile/profile-action-creators';


const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (payload: string) => {
            dispatch(ProfileActionCreators.updateNewPostText(payload))
        },
        addPost: () => {
            dispatch(ProfileActionCreators.addPost())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)