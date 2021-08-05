# components-data

This repository to manage all components data and using for auto generate code with [https://github.com/101digital/generate-project-extension]

## Required

Make sure you have permission to access this repo, then can use `yarn` or `npm` to install this package.
Run below command in the generator extension

```
yarn add git+ssh://git@github.com:101digital/components-data.git --dev
```

To get more detail how to install private repository, can found here: [https://nts.strzibny.name/using-private-github-repositories-with-yarn-and-npm-in-package-json/]

## Data structure

Each component data should follow base structure that can be read with generator extension

<br>Base structure</br>

```
{
    "id": "string",
    "name": "string",
    "repository": "string",
    "config": {},
    "dependencies": [],
    "templates": []
    "texts": {}
}
```

- id: the component identifier and should have same value with root component
- name: the component name and should have same value with root component
- repository: the repository of root component
- config: list of the config data need for root component
- dependencies: list of dependencies package need for root component
- templates: list of template which root component support
- texts: define all text/string for multiple language

## Return component data by component id

Update function `getDataByComponentId` in the `index.js` with target component id and component data
