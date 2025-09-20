const airtableBaseID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const airtablePersonalToken = import.meta.env.VITE_AIRTABLE_TOKEN;

type data = {
    emailAddress: string;
    businessName: string;
    businessType: string;
};

export const createRecord = async (data: data) => {
    const url = `https://api.airtable.com/v0/${airtableBaseID}/tblVrTurvBxXFzgzL`;
    console.log(airtableBaseID);
    console.log(airtablePersonalToken);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${airtablePersonalToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            records: [
                {
                    fields: {
                        "email address": data.emailAddress,
                        "business name": data.businessName,
                        "business type": data.businessType,
                        "Signup date": new Date().toISOString().split("T")[0],
                    },
                },
            ],
        }),
    });

    return await response.json();
};
