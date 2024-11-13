import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, changeFollowers, changeFollowing} = useContext(TwitterContext);


    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div

                    onClick={() => {
                        const newFollowers = ++stats.followers;
                        changeFollowers(newFollowers);
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        let newFollowers = stats.followers;
                        if (stats.followers > 0) {
                            newFollowers = --stats.followers;
                        } else {
                            newFollowers = 0;

                        }
                        changeFollowers(newFollowers);

                    }}
                >
                    Followers: {stats.followers}
                </div>

                <div

                    onClick={() => {
                        const newFollowing = ++stats.following;
                        changeFollowing(newFollowing);
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        let newFollowing = stats.following;
                        if (stats.following > 0) {
                            newFollowing = --stats.following;
                        } else {
                            newFollowing = 0;

                        }
                        changeFollowing(newFollowing);

                    }}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;