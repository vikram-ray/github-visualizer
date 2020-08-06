// created_at
// description
// name
// stargazers_count
// homepage
// language

// Total starts in profile

//watchers_count
// clone_url
// https://api.github.com/repos/rayvikram/GoogleMeet-Clone-With-WebRTC/languages
// license
// open_issues_count
// forks_count
// updated at


export const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

// parse data for creating chart
export const parseRepoData = data => {
    const languages = {}
    let totalStars = 0
    data.forEach(eachRepo=>{
        totalStars+=eachRepo.stargazers_count
        const language = eachRepo.language
        if (!(languages.hasOwnProperty(language))){
            languages[language] = 0
        }
        languages[language]+=1
    })
    
    // to replace null with others from chart
    if (languages.hasOwnProperty('null')){
        languages.others = languages.null
        delete languages.null
    }
    const chartData = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
            hoverBackgroundColor: [],
        }]
    }
    for (const [key, value] of Object.entries(languages)) {
        chartData.labels.push(key)
        chartData.datasets[0].data.push(value)
        chartData.datasets[0].backgroundColor.push(getRandomColor())
        chartData.datasets[0].hoverBackgroundColor.push(getRandomColor())

      }

    return { parsedRepoData: chartData, totalStars } 
}

