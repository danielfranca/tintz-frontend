import axios from 'axios';

const authParams = {
    username: "admin",
    password: "ADM12345678"
}

export function guessIcon(name) {
    const icons = {
        "nginx": "server",
        "uwsgi": "server",
        "centos": "linux",
        "ubuntu": "linux",
        "mysql": "database",
        "postgresql": "database"
    }

    for (let icon in icons) {
        if (name.includes(icon)) {
            return icons[icon];
        }
    }

    return "cloud upload";
}

export function findUserID(username) {
  return axios.get('https://office.booking.com/staff/search.json?q='+username);
}

export function getAvatarURL(username) {
    findUserID(username).then((response) => {
        if (response.data && response.data.length > 0) {
            for (let info of response.data) {
                if (info.loginname === username) {
                    return "http://office.booking.com/images/admin/staff/"+info.id+".jpg";
                }
            }
        }
    })
}

export function getDockersList() {
  return axios.get('http://localhost:8000/catalog/', {
      auth: authParams
  });
}

export function getTags(name) {
  return axios.get('http://localhost:8000/tags/?name=' + name, {
      auth: authParams
  });
}
