import React, {useContext, useState, useEffect, useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import {Form,Button} from 'react-bootstrap';
import PersonalInformation from "./InformationForm/PersonalInformation";
import ProfessionalInformation from "./InformationForm/ProfessionalInformation";
import DegreeAndCertification from "./InformationForm/DegreeAndCertification";
import WorkPlaceSetup from "./InformationForm/WorkPlaceSetup";
import style from './DoctorRegistration.module.css';
import {ProfileCompletionContext} from "../../../context/ProfileCompletionContext";
import Msg from "../../Msg";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Personal information', 'Professional Information','Degree & Certification', 'Workplace Setup'];
}

function getStepContent(step) {

}

export default function DoctorProfileSettings() {
    const {context}=useContext(ProfileCompletionContext);

    // ref
    const msgRef = useRef();

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    useEffect(()=>{
        //setActiveStep(context.completedStep);
    },[]);
    const steps = getSteps();

    const isStepOptional = step => {
        return step === 1;
    };

    const isStepSkipped = step => {
        return skipped.has(step);
    };
    const goNextStep = ()=>{
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const stepContent = (step)=>{
        switch (step) {
            case 0:
                return <PersonalInformation msgRef={msgRef} goNextStep={goNextStep}/>;
            case 1:
                return <ProfessionalInformation msgRef={msgRef} goNextStep={goNextStep}/>;
            case 2:
                return <DegreeAndCertification msgRef={msgRef} goNextStep={goNextStep}/>;
            case 3:
                return <WorkPlaceSetup msgRef={msgRef} goNextStep={goNextStep}/>;
            default:
                return ;
        }
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <div className="container">
            <div className="wk-section-common-style">
                <div className="text-center my-3">
                    <h2>Profile Settings</h2>
                </div>
            </div>
            <div className={classes.root}>
                <Stepper activeStep={activeStep} className="mb-5">
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div className={'mb-5 '+ style.DoctorRegistrationPanel}>
                    <div className={style.DoctorRegistrationPanelForm}>
                        { activeStep === steps.length && (
                            <div>
                                <Typography className={classes.instructions} component={'div'}>
                                    Registration Complete
                                </Typography>
                                {/*<Button onClick={handleBack} className={classes.button}>*/}
                                {/*    Back*/}
                                {/*</Button>*/}
                            </div>
                        )}
                        <div>
                            <Typography className={classes.instructions} component={'div'}>
                                <Msg generateRef={msgRef} />
                                {stepContent(activeStep)}
                            </Typography>
                            <div className="row justify-content-end px-3">
                                <button disabled={activeStep === 0} onClick={handleBack} className={"mr-3 " +style.DoctorBackButton}>
                                    Back
                                </button>
                                <button
                                    disabled={
                                        !(context.completedStep > activeStep) ||
                                        activeStep === (steps.length - 1)
                                    }
                                    onClick={handleNext}
                                    className={style.DoctorNextButton}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}