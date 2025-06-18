import Loading from "@components/Loading.vue";

/** Loading component with customizable massage*/
export default {
    title: "Loading",
    component: Loading,
    argTypes: {
        loadingType: {
            options: ["loading", "photo", "connection", "check", "internet_false", "try_again", "retry"],
            control: { type: "select" },
        },
    },
};
/** Происходит загрузка в базу*/
export const Primary = {
    args: {
        loadingType: "loading",
    },
};
/** Нет интернет-соединения*/
export const InternetFalse = {
    args: {
        loadingType: "internet_false",
    },
};

/** Идет обработка фотографии*/
export const PhotoProcessing = {
    args: {
        loadingType: "photo",
    },
};
