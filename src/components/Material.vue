<template>
  <div class="material_management">
    <el-row>
      <div class="new_button">
        <router-link to="/addEmployee">
          <el-button size="small" plain icon="el-icon-plus">新增</el-button>
        </router-link>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="material_list">
          <div class="banliao">
            <div class="img_banliao">
              <img src="../assets/u1663.svg" alt="example" />
            </div>
            <div class="info_banliao">
              <div class="info_banliao_title">板料</div>
              <div class="info_banliao_content">板料指由板坯轧制的光滑平面金属的半制品，其长度和宽度远远大于厚度。</div>
            </div>
            <div class="material_icon">
              <el-button-group>
                <el-button icon="el-icon-plus" @click="addMaterial = true"></el-button>
                <el-button icon="el-icon-search" @click="searchMaterial = true"></el-button>
              </el-button-group>
            </div>
          </div>

          <div class="bangliao">
            <div class="img_bangliao">
              <img src="../assets/u1672.svg" alt="example" />
            </div>
            <div class="info_bangliao">
              <div class="info_bangliao_title">棒料</div>
              <div class="info_bangliao_content">棒料是针对于板材和其他型材而言，就是有一定长度的圆形或多边形长棍形状的材料。</div>
            </div>
            <div class="material_icon">
              <el-button-group>
                <el-button icon="el-icon-plus"></el-button>
                <el-button icon="el-icon-search"></el-button>
              </el-button-group>
            </div>
          </div>

          <div class="xingcai">
            <div class="img_xingcai">
              <img src="../assets/u2378.svg" alt="example" />
            </div>
            <div class="info_xingcai">
              <div class="info_xingcai_title">型材</div>
              <div class="info_xingcai_content">型材是指金属经过塑性加工成形，品种规格繁多，用途广泛，在轧制生产中占有非常重要的地位。</div>
            </div>
            <div class="material_icon">
              <el-button-group>
                <el-button icon="el-icon-plus"></el-button>
                <el-button icon="el-icon-search"></el-button>
              </el-button-group>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="新增规格" :visible.sync="addMaterial" width="800px">
      <el-form :model="form">
        <el-col :span="12">
          <el-form-item label="名称 :" required :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="物料编号 :" :label-width="formLabelWidth">
            <el-input v-model="form.stockNumber" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="长 :" :label-width="formLabelWidth">
            <el-input v-model="form._length" autocomplete="off">
              <template slot="append">mm</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="宽 :" :label-width="formLabelWidth">
            <el-input v-model="form._width" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="厚 :" :label-width="formLabelWidth">
            <el-input v-model="form._height" autocomplete="off">
              <template slot="append">mm</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="密度 :" :label-width="formLabelWidth">
            <el-input v-model="form.density" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单价 :" :label-width="formLabelWidth">
            <el-input v-model="form.unitPrice" autocomplete="off">
              <template slot="append">元/Kg</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="密度 :" :label-width="formLabelWidth">
            <el-input v-model="form.remark" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addMaterial = true">取 消</el-button>
        <el-button type="primary" @click="addMaterial = false">保 存</el-button>
      </div>
    </el-dialog>
    <el-dialog title="板料" :visible.sync="searchMaterial" width="800px">
      
      <el-table :data="form" border style="width: 100%">
        <el-table-column prop="name" label="名称" width="90px"></el-table-column>
        <el-table-column prop="stockNumber" label="物料编号" width="90px"></el-table-column>
        <el-table-column prop="_length" label="长mm" width="70px"></el-table-column>
        <el-table-column prop="_width" label="宽mm" width="70px"></el-table-column>
        <el-table-column prop="_height" label="厚mm" width="70px"></el-table-column>
        <el-table-column prop="density" label="密度g/cm³" width="100px"></el-table-column>
        <el-table-column prop="unitPrice" label="价格(元/Kg)" width="100px"></el-table-column>
        <el-table-column prop="remark" label="备注" width="90px"></el-table-column>
        <el-table-column prop="name" label="操作" width="90px"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addMaterial = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true">修 改</el-button>
      </div>
      <el-dialog
        title="修改"
        width="800px"
        :visible.sync="innerVisible"
        append-to-body="true"
      >

      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Material",
  data() {
    return {
      addMaterial: false,
      searchMaterial: false,
      innerVisible: false,
      form: {
        name: "",
        stockNumber: "",
        _length: "",
        _width: "",
        _height: "",
        density: "",
        unitPrice: "",
        remark: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
.new_button {
  padding-left: 50px;
  padding-top: 50px;
}
.material_list {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  padding: 50px;
  height: 345.2px;
  width: 1021.2px;
}
.banliao,
.bangliao,
.xingcai {
  width: 298px;
  height: 338.4px;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  margin-right: 12px;
  border-radius: 2px;
}
.img_banliao,
.img_bangliao,
.img_xingcai {
  width: 298px;
  height: 149px;
}
.info_banliao,
.info_bangliao,
.info_xingcai {
  padding: 24px;
  width: 250px;
  height: 94px;
}
.info_banliao_title,
.info_bangliao_title,
.info_xingcai_title {
  margin-bottom: 8px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
}
.info_banliao_content,
.info_bangliao_content,
.info_xingcai_content {
  height: 70px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}
.el-button {
  font-size: 14px;
  .el-icon-plus {
    color: #1890ff;
  }
}
.material_icon {
  .el-button-group .el-button {
    width: 149.5px;
    height: 48px;
    font-size: 20px;
    background: #fafafa;
    .el-icon-plus {
      color: #606266;
    }
  }
}
div.el-input-group_append {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fafafa;
}
.el-table {
  line-height: 1.5;
  font-size: 12px;
  color: black;
  & thead {
    color: black;
  }
}
.el-pagination{
  display: inline-block;
  margin-left: 600px;
  margin-top: 20px;
}
</style>
