export default interface Issue {
    title: string;
    number: number;
    html_url: string;
    assignees?: {
        login: string;
        avatar_url: string;
        html_url: string;
    }[];
    labels: {
        id: number;
        name: string;
    }[];
    milestone: {
        title: string;
        html_url: string;
    };
}
