import { sections } from '../../../../RegisterPage/Constants/Constants';

export default function PersonalInfoNavBar() {
    const changePersonalInfoSection = (section: string) => {
        const event = new CustomEvent('changePersonalInfoSection', { detail: section });
        window.dispatchEvent(event);
    };

    return (
        <ul
            className=" w-100 h-100  d-flex  flex-md-column flex-wrap mb-2 p-2"
            style={{ listStyle: 'none', border: '1px solid black' }}
        >
            {sections.map((section) => (
                <button
                    className="btn btn-light"
                    style={{ backgroundColor: '#eee', border: '1px solid #eee' }}
                    onClick={() => {
                        changePersonalInfoSection(section);
                    }}
                >
                    <span className="m-2">{section}</span>
                </button>
            ))}
        </ul>
    );
}
