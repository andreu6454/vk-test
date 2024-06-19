import {$api} from "../../../../shared/api/api.ts";

export const getCatalog = async () => {
    const resp = await $api.get("movie");
    console.log(resp);
    return resp.data?.docs?.[0];
}