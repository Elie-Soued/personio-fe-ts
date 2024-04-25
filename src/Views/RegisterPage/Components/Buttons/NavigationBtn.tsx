import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { sections } from '../../../../Constants/Constants';

interface Props {
    nextFn: Function;
    prevFn: Function;
    section: string;
}

export default function NagigationBtns({ nextFn, prevFn, section }: Props) {
    function findSection(section: string) {
        return function (value: string, index: number, obj: string[]) {
            return value === section;
        };
    }

    const index = sections.findIndex(findSection(section)) + 1;

    return (
        <div className="d-flex justify-content-center " style={{ minHeight: '78px' }}>
            <div
                className={`col-${section === 'Development' ? 6 : 4} d-${
                    section === 'Public Profile' ? 'none' : 'block'
                } text-${section === 'Development' ? 'end' : 'center'} p-2 `}
            >
                <button
                    className="btn btn-primary btn-block fa-lg   active w-10"
                    onClick={() => {
                        prevFn();
                    }}
                >
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </button>
            </div>

            <div
                className={`col-${section === 'Development' || section === 'Public Profile' ? 6 : 4} 
                text-${section === 'Development' ? 'start' : section === 'Public Profile' ? 'end' : 'center'} p-2 `}
            >
                <span>
                    {section === 'Development'
                        ? `Go to the previous sections ${`${index} / 8`} `
                        : section === `Public Profile`
                        ? `Fill up all sections ${`${index} / 8`}`
                        : `${`${index} / 8`}`}
                </span>
            </div>

            <div
                className={`col-${section === 'Public Profile' ? 6 : 4} d-${
                    section === 'Development' ? 'none' : 'block'
                } text-${section === 'Public Profile' ? 'start' : 'center'} p-2 `}
            >
                <button
                    className="btn btn-primary btn-block fa-lg  active w-10"
                    onClick={() => {
                        nextFn();
                    }}
                >
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </button>
            </div>
        </div>
    );
}
