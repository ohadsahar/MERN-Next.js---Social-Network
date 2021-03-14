import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Error from "../../../components/Error/error";
import { Button } from "../../../components/styledLogin";
import { Input } from "../../../components/styledCreateProfile";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile, updateProfile } from "../../../store/actions/profile.actions";

const EditProfile = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const [enableSocial, setEnableSocial] = useState(false);
    const profile = useSelector(state => state.profile.profile);


    useEffect(() => {
        dispatch(getCurrentProfile());
    },[]);
    const onSubmit = (data) => {
        dispatch(updateProfile(data, false));
    };
    const handleSocialInput = () => {
        setEnableSocial(!enableSocial);
    };

    return (
        profile !== null ? (
            <form onSubmit={handleSubmit(onSubmit)}>
                <select ref={register} name="status" defaultValue={profile?.status}>
                    <option value="0">* Select Professional Status</option>
                    <option value="Developer">Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                </select>
                <Input
                    defaultValue={profile?.company}
                    ref={register({ required: true })}
                    name="company"
                    placeholder="Insert your company name"
                ></Input>
                {errors.company ? (
                    <Error errors={errors.company} type={errors.company.type} />
                ) : null}
                <Input
                    defaultValue={profile?.website}
                    ref={register}
                    name="website"
                    placeholder="Insert your website(if you have)"
                ></Input>
                <Input ref={register} name="location" placeholder="Location"></Input>

                <Input
                    defaultValue={profile?.skills}
                    ref={register({ required: true })}
                    name="skills"
                    placeholder="Enter your skills with comma (javascript, angular, react)"
                ></Input>
                {errors.skills ? (
                    <Error errors={errors.skills} type={errors.skills.type} />
                ) : null}
                <Input ref={register} name="Bio" placeholder="Some description"></Input>
                <Input
                    defaultValue={profile?.githubusername}
                    ref={register}
                    name="githubusername"
                    placeholder="Your github username"
                ></Input>
                <button type="button" onClick={handleSocialInput}>
                    {!enableSocial ? <p>Add social links</p> : <p>Hide social links</p>}
                </button>
                {enableSocial ? (
                    <div>
                        <Input
                            defaultValue={profile?.facebook}
                            ref={register}
                            name="facebook"
                            placeholder="Facebook url"
                        ></Input>
                        <Input
                            defaultValue={profile?.twitter}
                            ref={register}
                            name="twitter"
                            placeholder="Twitter url"
                        ></Input>
                        <Input
                            defaultValue={profile?.instagram}
                            ref={register}
                            name="instagram"
                            placeholder="Instagram url"
                        ></Input>
                        <Input
                            defaultValue={profile?.youtube}
                            ref={register}
                            name="youtube"
                            placeholder="Youtube url"
                        ></Input>
                        <Input
                            defaultValue={profile?.linkedin}
                            ref={register}
                            name="linkedin"
                            placeholder="Linkedin url"
                        ></Input>
                    </div>
                ) : null}
                <Button>Submit</Button>
            </form>) : <Fragment><p>Loading Profile</p></Fragment>
    );
};

export default EditProfile;
