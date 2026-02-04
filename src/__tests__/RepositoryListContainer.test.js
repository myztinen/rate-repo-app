import { Text, TextInput, Pressable, View } from 'react-native';
import { RepositoryListContainer } from '../components/RepositoryList'
import { render, fireEvent, screen, within } from '@testing-library/react-native';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };


            render(<RepositoryListContainer repositories={repositories} />);
            const repositoryItems = screen.getAllByTestId('repositoryItem');
            const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
            expect(within(firstRepositoryItem).getByTestId('repoName')).toHaveTextContent(repositories.edges[0].node.fullName);
            expect(within(firstRepositoryItem).getByTestId('description')).toHaveTextContent(repositories.edges[0].node.description);
            expect(within(firstRepositoryItem).getByTestId('language')).toHaveTextContent(repositories.edges[0].node.language);
            expect(within(firstRepositoryItem).getByTestId('stargazers')).toHaveTextContent(String(repositories.edges[0].node.stargazersCount));
            expect(within(firstRepositoryItem).getByTestId('reviewCount')).toHaveTextContent(String(repositories.edges[0].node.reviewCount));
            expect(within(firstRepositoryItem).getByTestId('ratingAverage')).toHaveTextContent(String(repositories.edges[0].node.ratingAverage));
            expect(within(secondRepositoryItem).getByTestId('repoName')).toHaveTextContent(repositories.edges[1].node.fullName);
            expect(within(secondRepositoryItem).getByTestId('description')).toHaveTextContent(repositories.edges[1].node.description);
            expect(within(secondRepositoryItem).getByTestId('language')).toHaveTextContent(repositories.edges[1].node.language);
            expect(within(secondRepositoryItem).getByTestId('stargazers')).toHaveTextContent(String(repositories.edges[1].node.stargazersCount));
            expect(within(secondRepositoryItem).getByTestId('reviewCount')).toHaveTextContent(String(repositories.edges[1].node.reviewCount));
            expect(within(secondRepositoryItem).getByTestId('ratingAverage')).toHaveTextContent(String(repositories.edges[1].node.ratingAverage));
        });
    });
});