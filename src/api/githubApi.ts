import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});