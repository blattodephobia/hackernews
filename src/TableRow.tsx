import React, { FC, useState } from 'react';
import { PostDTO2 } from './PostDTO';

export const TableRow: FC<{ dto: PostDTO2, index: number }> = ({ dto, index }) => {
    const [hidden, setHidden] = useState(false);

    return (
        <tr hidden={hidden}>
            <td className="athing"
                id={dto.postID.toString()}>
                <span
                    className="title">
                    <span className="rank">{index + 1}.</span>
                </span>

                <span
                    className="votelinks">
                    <div className="center">
                        <a>
                            <div className="votearrow"
                                title="upvote" />
                        </a>
                    </div>
                </span>

                <span className="title">
                    <a href={dto.url.toString()}>{dto.url.toString()}&nbsp;</a>
                    <span className="sitebit comhead">(<a href={"http://" + dto.url.host}>{dto.url.host}</a>)</span>
                </span>
            </td>

            <td>
                <span></span>

                <span className="subText">
                    <span className="score">{dto.points}&nbsp;</span>
                    by&nbsp;
                    <a href={"user?id=" + dto.author}
                                    className="hnuser">
                                    {dto.author}&nbsp;
                    </a>

                    <span className="age">
                        <a href={dto.url.toString()}>{new Date().getDate() - dto.datePosted.getDate()} minutes ago&nbsp;</a>
                    </span>

                    <span>
                        |&nbsp;
                        <a onClick={() => setHidden(true)}>hide</a>
                        |&nbsp;
                        <a>{dto.commentsCount} comments&nbsp;</a>
                    </span>
                </span>
            </td>

            <td className="spacer" style={{ height: "5px" }}></td>
        </tr>
    )
}