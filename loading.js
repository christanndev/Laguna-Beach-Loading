const LoadingBase = new Vue({
    el: ".LoadingBase",
    data: {
        active: false,
        zoom: 1,
    },

    mounted() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("message", this.onMessage);
    },

    methods: {
        async post(url, data = {}) {
            try {
                const response = await fetch(`https://${GetParentResourceName()}/${url}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            
                if (response.ok) {
                    return await response.json();
                } else {
                    throw new Error(`${response.status}`);
                }
            } catch (error) {
                return null;
            }
        },

        handleResize() {
            var zoomCountOne = window['innerWidth'] / 1920;
            var zoomCountTwo = window['innerHeight'] / 1080;

            if (zoomCountOne < zoomCountTwo) {
                this['zoom'] = zoomCountOne;
            } else {
                this['zoom'] = zoomCountTwo;
            }
        },

        onMessage() {
            var data = event.data

            switch (data.act) {
                case "Open":
                    
                break;
            }
        }
    }
});
