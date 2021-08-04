// 监听屏幕的变化，得到当前的col
export default {
    name: 'Resize',
    data() {
        return {
            colMap: {
                xl: 1920,
                lg: 1200,
                md: 992,
                sm: 768,
                xs: 0
            }
        }
    },
    computed: {
        curCol() {
            return this.$store.getters['resize/Col']
        },
        curWidth() {
            return this.$store.getters['resize/CurScreenWidth']
        }
    },
    mounted() {
        // console.log(111111111111111111111111)
    }
}
