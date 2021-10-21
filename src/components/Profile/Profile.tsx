import React, {FC} from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../store/reducers/profile-reducer';

export interface ProfilePropsType {
    profile: ProfileType | null
}

const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;